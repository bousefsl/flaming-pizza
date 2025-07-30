"use server"

//Next
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
//Lodash (Third Party -- "https://lodash.com")
import { kebabCase } from "lodash"

export async function createPizza(formData: FormData) {
  //Get the "title" value and set the id to the title in "kebab-case" (from Lodash "https://lodash.com/docs/4.17.15#kebabCase" )
  const idtemp = formData.get("title") as string
  const id = kebabCase(idtemp)

  const image = "/pizza11.jpg"
  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const content2 = formData.get("content2") as string
  const toppings = formData.getAll("toppings") as string[]

  //Get the "heatContent" formdata value (i.e. "Mild 1") and split it to set both the "heatContent" & "heatImg" variables
  const heattemp = formData.get("heatContent") as string
  const heatvalues = heattemp.split(" ")
  const heatContent = heatvalues[0].toString() as string
  const heatImg = `/heat${heatvalues[1]}.png`

  const blurHash = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcZmJSDwAEZQGf2O6XywAAAABJRU5ErkJggg=="

  //Set the pizza object to add to our data
  const pizza = { id, image, title, content, content2, toppings, heatContent, heatImg, blurHash }

  const res = await fetch("http://localhost:3001/pizzas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pizza),
  })

  const json = await res.json()

  if (json.error) {
    console.log(json.error.message)
  }

  revalidatePath("/pizzas")
  redirect("/pizzas")
}

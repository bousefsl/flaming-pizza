"use client"

//React
import { useEffect } from "react"
//React Hot Toast (Third Party)
import toast from "react-hot-toast"

type ToastProps = {
  state: string | undefined
  message: string | undefined
}

export default function ToastAlert({ state, message }: ToastProps) {
  const toastNotifySuccess = () => toast.success(`${message}`)
  const toastNotifyError = () => toast.error("Error!")

  useEffect(() => {
    if (state === "true") {
      toastNotifySuccess()
    } else {
      toastNotifyError()
    }
  }, [])

  return <></>
}

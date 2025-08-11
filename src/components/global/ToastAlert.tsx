"use client"

//React
import { useEffect } from "react"
//Types
import { ToastProps } from "@/types"
//React Hot Toast (Third Party)
import toast from "react-hot-toast"

export default function ToastAlert({ state, message }: ToastProps) {
  const toastNotifySuccess = () => toast.success(`${message}`)
  const toastNotifyError = () => toast.error("Error!")

  useEffect(() => {
    if (state === "true") {
      toastNotifySuccess()
    }
  }, [])

  return <></>
}

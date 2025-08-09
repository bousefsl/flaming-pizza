"use client"

//=====TOAST PROVIDER=====//
import { Toaster } from "react-hot-toast"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: { background: "#222", color: "#fff", border: "2px solid" },
          success: {
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
            style: {
              borderColor: "#57ac8f",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
            style: {
              borderColor: "#b63434",
            },
          },
        }}
      />
      {children}
    </>
  )
}

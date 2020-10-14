import React from "react"

import { useMachine } from "@xstate/react"

import { generatePdfMachine } from "../machines/generatePdf"
import { Button, Typography } from "../../../components"

interface GeneratePDFProps {
  ballotType: string
  ballotPath: string
  votes: any
}

export const GeneratePDF: React.FunctionComponent<GeneratePDFProps> = ({
  ballotType,
  ballotPath,
  votes,
}) => {
  const [current, send] = useMachine(generatePdfMachine)
  return (
    <div className="mt-6 lg:mx-auto">
      {current.matches("idle") && (
        <Button
          className="w-full"
          onClick={() => {
            send("generate", {
              ballotType,
              ballotPath,
              votes,
            })
          }}
        >
          Generar PDF
        </Button>
      )}

      {current.matches("creatingTask") && <>LOADING YOUR PDF...</>}
      {current.matches("gettingPdfUrl") && <>LOADING YOUR PDF...</>}

      {current.matches("generatedPdf") && (
        <div className="mt-6 w-full lg:w-1/3 lg:mx-auto">
          <Button
            className="w-full"
            onClick={() => {
              window.location = current.context.pdfUrl as any
            }}
          >
            Descargar PDF
          </Button>
          <Typography tag="p" variant="p" className="text-xs italic mt-6 mb-6">
            Este enlace solamente estara activo por 3 minutos
          </Typography>
        </div>
      )}

      {current.matches("linkExpired") && (
        <Typography tag="p" variant="h4" className="font-bold">
          El enlace para descargar el PDF se expiro
        </Typography>
      )}
    </div>
  )
}

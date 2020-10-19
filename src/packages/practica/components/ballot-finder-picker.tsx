import React from "react"

import { Button, Typography, Link } from "../../../components"

type BallotFinderPickerProps = {
  selectVoterId: () => void
  selectPrecint: () => void
}

export default function BallotFinderPicker(props: BallotFinderPickerProps) {
  return (
    <div className="mx-auto lg:w-3/4">
      <Typography tag="p" variant="h3" className="uppercase">
        Busquemos tus papeletas
      </Typography>
      <Typography tag="p" variant="p" className="mt-1">
        Selecciona una de las siguientes maneras para ver tus papeletas
      </Typography>
      <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-2">
        <div className="w-full my-1">
          <Button className="block w-full" onClick={props.selectVoterId}>
            Número de tarjeta electoral
          </Button>
        </div>
        <div className="w-full my-1">
          <Button className="block w-full" onClick={props.selectPrecint}>
            Número de precinto o pueblo
          </Button>
        </div>
      </div>
      <Typography className="text-sm mt-4" tag="p" variant="p">
        Si deseas utilizar tu número de precinto pero no lo conoces, visita{" "}
        <Link to="https://consulta.ceepur.org" target="_blank">
          Consulta CEE
        </Link>{" "}
        , entra tu número electoral, preciona el botón de Buscar e ingresa el
        número que aparece en el encasillado de Precinto en Para Votar.
      </Typography>
      <Typography className="text-xs italic mt-2" tag="p" variant="p">
        Para Votar no almacena ningún tipo de información personal ni hace
        ningún tipo de rastreo de los usuarios que utilizen la página. Todo voto
        practicado es completamente anonimo.
      </Typography>
      <Typography className="text-xs italic mt-2" tag="p" variant="p">
        Si deseas buscar tus papeletas por pueblo y colegio electoral puedes
        utilizar{" "}
        <Link to="https://www.practicatuvoto.com/" target="_blank">
          Práctica tu voto
        </Link>
        .
      </Typography>
    </div>
  )
}

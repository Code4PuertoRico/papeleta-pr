import React, { useMemo, useState } from "react"
import { voterCenters } from "./constants"
import { Typography } from "../.."

interface LetterListProps {
  onSelect: (letter: string) => void
  letter: string
}

export function LetterList({ onSelect, letter }: LetterListProps) {
  const letterList = useMemo(
    () =>
      voterCenters
        .map(({ pueblo }) => pueblo)
        .reduce((letterMap: any, pueblo) => {
          const firstLetter = pueblo.charAt(0)
          if (Object.keys(letterMap).includes(firstLetter)) {
            letterMap[firstLetter] = letterMap[firstLetter] + 1
          } else {
            letterMap[firstLetter] = 1
          }
          return letterMap
        }, {}),
    []
  )

  const handleSelect = (letter: string) => () => {
    onSelect(letter)
  }

  return (
    <ul className="flex overflow-x-auto lg:flex-no-wrap lg:justify-around items-start pl-4 pr-4 pt-4 pb-5 border-b border-separator">
      {Object.keys(letterList).map(l => (
        <li key={l}>
          <button
            onClick={handleSelect(l)}
            className={`flex items-center justify-center text-2xl h-10 w-10 rounded-full border-2 hover:bg-primary hover:text-white focus:outline-none ${
              l === letter
                ? "text-white font-bold bg-primary border-dark"
                : "border-white"
            }`}
          >
            {l}
          </button>
        </li>
      ))}
    </ul>
  )
}
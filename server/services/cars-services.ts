import { CarEntry, NonSensitiveValuesCarEntry } from '../types'
import carsData from './cars.json'

// const cars: Array<CarEntry> = carsData // opt 1
const cars: CarEntry[] = carsData as [] // opt 2

export const getEntries = () => carsData

export const getEntriesWithOutSensitiveValues = (): NonSensitiveValuesCarEntry[] => cars

export const addEntry = () => null
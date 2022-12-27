// Require this type for user reaction.
export type UserReaction = 'like' | 'dislike'

// Main car type.
export interface CarEntry {
  uuid: string,
  name: string,
  model: number,
  description: string,
  reaction: UserReaction,
  stock: number
}

// Exclude values
export type NonSensitiveValuesCarEntry = Omit<CarEntry, 'stock'>
// End Exclude values --
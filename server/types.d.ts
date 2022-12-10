// Require this type for user reaction.
export type UserReaction = 'like' | 'dislike'

// Main car type.
export interface CarEntry {
  id: string,
  name: string,
  model: number,
  description: string,
  reaction: UserReaction,
  stock: number
}

// Exclude values
// Opt 1:
// export type NonSensitiveValuesCarEntry = Pick<CarEntry, 'id' | 'name' | 'model' | 'description' | 'reaction'>

// Opt 2:
export type NonSensitiveValuesCarEntry = Omit<CarEntry, 'stock'>
// End Exclude values --





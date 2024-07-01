

export const JoinStepType = {
  ID: "ID",
  PASSWORD: "PASSWORD",
  NAME: "NAME",
  PHONENUMBER: "PHONENUMBER",
  ADDRESS: "ADDRESS"
} as const;

export type JoinStepType = keyof typeof JoinStepType

export type JoinStepId = 1 | 2  | 3 | 4 | 5

export const JoinStepKey:{[key in JoinStepId]: JoinStepType} = {
  1: "ID",
  2: 'PASSWORD',
  3: 'NAME',
  4: 'PHONENUMBER',
  5: 'ADDRESS'
} as const


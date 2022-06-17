export interface Sub {
    nick: string,
    subMonth: number | string,
    description?: string
}

export type SubsApi = Array<{
    utm_mediu: string,
    accountId: string,
    utm_term: string
}>
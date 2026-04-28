export interface ISpacesType {
    id: number
    title: string
    zoneType: 'open-space' | 'meeting-room' | 'private-office'
    pricePerHour: number
    capacity: number
    rating: number
    description: string
    images: string[]
}
export type ISpacesCreateType = Omit<ISpacesType, 'id' | 'images'>
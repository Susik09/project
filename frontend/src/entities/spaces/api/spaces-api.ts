import { isAxiosError } from "axios";
import { axiosInstance } from "../../../shared/lib/axiosInstance";
import type { ISpacesCreateType, ISpacesType } from "../types/spaces-type";

export class SpacesApi {
    static async get_all(): Promise<{ error: string | null, data: ISpacesType[] | null }> {
        try {
            const { data } = await axiosInstance.get<ISpacesType[]>('/spaces')
            return {
                data: data,
                error: null
            }
        } catch (error) {
            if (isAxiosError(error)) {
                return {
                    data: null,
                    error: `Error: ${error.message}`
                }
            }
            return {
                data: null,
                error: `Error: ${error}`
            }
        }
    }

    static async remove(id: number) {
        try {
            const { data } = await axiosInstance.delete('/spaces/' + id)
            return data
        } catch (error) {
            if (isAxiosError(error)) {
                return `Error: ${error.message}`
            }
            return `Error: ${error}`
        }
    }
    static async create(form: ISpacesCreateType) {
        try {
            const { data } = await axiosInstance.post('/spaces', form)
            return {
                data: data,
                error: null
            }
        } catch (error) {
            if (isAxiosError(error)) {
                return {
                    data: null,
                    error: `Error: ${error.message}`
                }
            }
            return {
                data: null,
                error: `Error: ${error.message}`
            }
        }
    }
    static async update(form: ISpacesCreateType, id: number) {
        try {
            const { data } = await axiosInstance.put('/spaces/' + id, form)
            return {
                data: data,
                error: null
            }
        } catch (error) {
            if (isAxiosError(error)) {
                return {
                    data: null,
                    error: `Error: ${error.message}`
                }
            }
            return {
                data: null,
                error: `Error: ${error.message}`
            }
        }
    }
}
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SpacesApi } from "../../../entities/spaces/api/spaces-api";
import type { ISpacesCreateType } from "../../../entities/spaces/types/spaces-type";

export function useSpaces() {
    return useQuery({
        queryKey: ['spaces'],
        queryFn: async () => {
            const response = await SpacesApi.get_all()            
            return response
        }
    })
}
export function useDeleteSpaces() {
    const client = useQueryClient()
    return useMutation({
        mutationFn: async (id: number) => {
            const response = await SpacesApi.remove(id)            
            return response
        },
        onSuccess: () => client.invalidateQueries({queryKey: ['spaces']})
    })
}
export function useCreateSpaces() {
    const client = useQueryClient()
    return useMutation({
        mutationFn: async (form: ISpacesCreateType) => {
            const response = await SpacesApi.create(form)            
            return response
        },
        onSuccess: () => client.invalidateQueries({queryKey: ['spaces']})
    })
}
export function useUpdateSpaces() {
    const client = useQueryClient()
    return useMutation({
        mutationFn: async ({form, id}: {form: ISpacesCreateType, id: number}) => {
            const response = await SpacesApi.update(form, id)            
            return response
        },
        onSuccess: () => client.invalidateQueries({queryKey: ['spaces']})
    })
}
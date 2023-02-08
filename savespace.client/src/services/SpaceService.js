import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SpaceService{
    
    async createSpace(){
        const res = await api.post('api/space', spaceData)
        logger.log("[res.data]". res.data)
        // AppState.spaces.push(res.data)
    }
}

export const spaceService = new SpaceService()
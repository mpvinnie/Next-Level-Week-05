import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsServices";

export class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { chat, username } = request.body

    const settingsService = new SettingsService()

    try {
      const settings = await settingsService.create({ chat, username})
      return response.status(201).json(settings)
    } catch(err) {
      return response.status(400).json({message: err.message})
    }
  }
}
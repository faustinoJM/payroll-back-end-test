import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import AppError  from "../../../../shared/errors/AppError";
import IPositionsRepository from "../../repositories/IPositionsRepository";

@injectable()
class ListPositionUseCase {

    constructor(@inject("PositionsRepository")
        private positionRepository: IPositionsRepository) {}

    async execute() {
        
        const positions = await this.positionRepository.list();

        return positions;

    }
}

export { ListPositionUseCase }
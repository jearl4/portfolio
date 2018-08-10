export class Capm {
    constructor(
        private rateOfReturn: number,
        private riskFreeRate: number,
        private beta: number,
        private marketRate: number
    ) { }
}

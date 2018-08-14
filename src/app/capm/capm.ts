export class Capm {
    constructor(
        public rateOfReturn: number,
        public riskFreeRate: number,
        public beta: number,
        public marketRate: number
    ) { }
}

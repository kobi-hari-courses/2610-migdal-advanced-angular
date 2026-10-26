interface IClaim {
    
    id: string;
}

export interface Claim extends IClaim {
    '@class': 'Claim';
}

export interface HealthClaim extends IClaim {
    '@class': 'HealthClaim';

}

export interface SickClaim extends IClaim {
    '@class': 'SickClaim';
}

interface IBaseProcess {
    insured: string;
}

export interface HealthProcess extends IBaseProcess {
    '@class': 'HealthProcess';
    claims: HealthClaim[];
    x: number;
    y: number;
}

export interface SickProcess extends IBaseProcess {
    '@class': 'SickProcess';
    claims: SickClaim[];
    x: number;
}

export interface NotSureProcess extends IBaseProcess {
    '@class': 'NotSureProcess';
    claims: Claim[];
}


export type StatusProcess = HealthProcess | SickProcess;

export type BaseProcess = StatusProcess | NotSureProcess;


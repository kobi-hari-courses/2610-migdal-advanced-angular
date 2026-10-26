class Claim {

}

class HealthCleam: Claim {

}

class SickClaims: Claim {

}


class BaseProcess {
    List<Claim> claims;
    String insured;

}

class HeathProcess: BaseProcess{
    List<HealthCleam> claims;
}

class SickProcess: BaseProcess {
    List<SickClaims> claims;
}


class NotSureProcess: BaseProcess{
    
}


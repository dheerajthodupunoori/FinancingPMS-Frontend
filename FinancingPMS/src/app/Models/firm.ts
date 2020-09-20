export class Firm {
  public ResolverError: string;
  constructor(
    public Name: string,
    public Id: string,
    public Email: string,
    public PhoneNumber: string,
    public password: string,
    public cPassword: string
  ) {}
}

export class FirmListResolver {
  public FirmsList: Firm[];
  public resolverErrorMessage?: string;
}

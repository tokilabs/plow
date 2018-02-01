import { IDomainEvent } from '../domain/domainEvent';

export type IHandlerFunction = (type: string, evt: IDomainEvent) => void;

import { DatasetFieldDefinition } from "./dataset-field-def";

export interface Dataset {
    lastUpdated?: number;
    name?: string;
    recordCount?: number;
    description?: string;
    indexableFields?: DatasetFieldDefinition[]
}

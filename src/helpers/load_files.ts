import * as fs from 'fs';
import * as path from 'path';
import { Service } from 'typedi';

@Service()
export default class LoadKeys {
    rsa256Key: string;

    constructor() {
        this.rsa256Key = fs.readFileSync(path.join(__dirname, '../keys/jwtRS256.key'), 'utf8');
    }

    key() {
        return this.rsa256Key
    }
}
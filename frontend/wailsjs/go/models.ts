export namespace hash {
	
	export class HashResult {
	    hashed?: string;
	    error?: string;
	
	    static createFrom(source: any = {}) {
	        return new HashResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.hashed = source["hashed"];
	        this.error = source["error"];
	    }
	}

}


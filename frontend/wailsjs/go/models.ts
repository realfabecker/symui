export namespace crypto {
	
	export class CryptoDecryptResult {
	    plainText: string;
	    error: string;
	
	    static createFrom(source: any = {}) {
	        return new CryptoDecryptResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.plainText = source["plainText"];
	        this.error = source["error"];
	    }
	}
	export class CryptoEncryptResult {
	    cipher: string;
	    error: string;
	
	    static createFrom(source: any = {}) {
	        return new CryptoEncryptResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.cipher = source["cipher"];
	        this.error = source["error"];
	    }
	}

}

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


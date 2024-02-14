export namespace domain {
	
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
	export class JwtDecodedResult {
	    decoded?: string;
	    error?: string;
	
	    static createFrom(source: any = {}) {
	        return new JwtDecodedResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.decoded = source["decoded"];
	        this.error = source["error"];
	    }
	}
	export class JwtEncodedResult {
	    encoded?: string;
	    error?: string;
	
	    static createFrom(source: any = {}) {
	        return new JwtEncodedResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.encoded = source["encoded"];
	        this.error = source["error"];
	    }
	}

}


import { HTTPError } from 'ky';

export class NotFoundHTTPError extends HTTPError {
	name;
	message;
	constructor(response, request, options) {
		super(response, request, options);
		this.name = 'NotFoundHTTPError';
		this.message = '해당 API를 찾을 수 없습니다.';
	}
}

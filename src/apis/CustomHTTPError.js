import { HTTPError } from 'ky';

export class NotFoundHTTPError extends HTTPError {
	constructor(response, request, options) {
		super(response, request, options);
		this.message = '해당 API를 찾을 수 없습니다.';
	}
}

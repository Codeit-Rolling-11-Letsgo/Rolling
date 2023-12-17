/**
 * Kakao 메시지를 특정 템플릿으로 사용자에게 전송하는 함수입니다.
 *
 * @param {string} THU - 전송 시 사용할 썸네일이미지 주소
 * @param {number} recipientId - 메세지함 주인 id
 * @param {string} recipientName - 메세지함 주인 이름
 * @param {number} totalReactionCount - 전체 반응 수
 * @param {number} totalMessageCount - 전체 메시지 수
 *
 * @example
 * // 함수 사용 예제
 * shareMessageKakao('이미지주소', recipientId, 'recipientName', 전체 반응 수, 전체 메시지 수);
 */

export default function shareMessageKakao(
	THU,
	recipientId,
	recipientName,
	totalReactionCount,
	totalMessageCount,
) {
	if (window.Kakao) {
		const kakao = window.Kakao;
		if (!kakao.isInitialized()) {
			kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
		}
		kakao.Share.sendCustom({
			templateId: 101981,
			templateArgs: {
				THU,
				recipientId,
				recipientName,
				totalReactionCount,
				totalMessageCount,
			},
		});
	}
}

import { canvases } from './http';

// 목록
export function getCanvases() {
  return canvases.get('/'); // get 메서드는 Promise 객체를 반환.
}

// 저장 수정 삭제

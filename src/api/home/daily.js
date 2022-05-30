import request from '@/utils/request'

// 查询日常记事列表
export function listDaily(query) {
  return request({
    url: '/home/daily/list',
    method: 'get',
    params: query
  })
}

// 查询日常记事详细
export function getDaily(id) {
  return request({
    url: '/home/daily/' + id,
    method: 'get'
  })
}

// 新增日常记事
export function addDaily(data) {
  return request({
    url: '/home/daily',
    method: 'post',
    data: data
  })
}

// 修改日常记事
export function updateDaily(data) {
  return request({
    url: '/home/daily',
    method: 'put',
    data: data
  })
}

// 删除日常记事
export function delDaily(id) {
  return request({
    url: '/home/daily/' + id,
    method: 'delete'
  })
}

import request from '@/utils/request'

// 查询ip日志列表
export function listLog(query) {
  return request({
    url: '/home/log/list',
    method: 'get',
    params: query
  })
}

// 查询ip日志详细
export function getLog(id) {
  return request({
    url: '/home/log/' + id,
    method: 'get'
  })
}

// 新增ip日志
export function addLog(data) {
  return request({
    url: '/home/log',
    method: 'post',
    data: data
  })
}

// 修改ip日志
export function updateLog(data) {
  return request({
    url: '/home/log',
    method: 'put',
    data: data
  })
}

// 删除ip日志
export function delLog(id) {
  return request({
    url: '/home/log/' + id,
    method: 'delete'
  })
}

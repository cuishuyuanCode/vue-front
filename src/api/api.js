import Axios from 'axios'



// /**
//  * 注册
//  * @param {Object} params 注册信息
//  */
// export function registryUser(params) {
// 	return new Promise((resolve, reject) => {
// 		Axios.post('/api/registry' + params).then(res => {
// 			resolve(res)
// 		}).catch(res => {
// 			reject(res)
// 		})
// 	})
// }

export function registryUser1(userContent) {
  Axios.post('/api/registryUser',{
    name: userContent.username,
    password: userContent.password,
    sex: userContent.sex
  }
)
    .then(function (resp) {
      console.log('是否注册成功:',resp)
    })
    .catch(function (err) {
      return false;
    });
}

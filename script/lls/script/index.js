var var_body = $response['body']
var var_url = $request['url']
if (var_url['indexOf']('/api/v2/member/subscription') != -0x1) {
	var obj = {}
	obj['expiredAt'] = 0x70db6800
	obj['remainDays'] = 0x3e7
	obj['active'] = !![]
	obj['startedAt'] = 0x61ec29ff
	var _0x57dba3 = obj
	var_body = JSON['stringify'](_0x57dba3)
	var _0x41be63 = {}
	_0x41be63['body'] = var_body
	$done(_0x41be63)
} else if (var_url['indexOf']('/api/v2/user_goods_subscriptions/overall') != -0x1) {
	var _0x172290 = {}
	_0x172290['startedAt'] = 0x61e2ef80
	_0x172290['category'] = 0x4
	_0x172290['status'] = 0x2
	_0x172290['expiredAt'] = 0x61ec29ff
	_0x172290['goodsTitle'] = 'member'
	_0x172290['remainDays'] = 0x3e7
	_0x172290['goodsUid'] = 'XnV1EW'
	_0x172290['firstStartedAt'] = 0x70db6800
	var _0x21883a = {}
	_0x21883a['items'] = [_0x172290]
	var _0x57dba3 = _0x21883a
	var_body = JSON['stringify'](_0x57dba3)
	var _0x387301 = {}
	_0x387301['body'] = var_body
	$done(_0x387301)
}
$done()

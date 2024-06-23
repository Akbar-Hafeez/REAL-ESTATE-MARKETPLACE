class ApiResponse {
constructor(statuscode,token,data, message="Success"){
    this.statuscode=statuscode
    this.token=token
    this.message=message
    this.data = data
    this.success=statuscode < 400
}
}


export { ApiResponse }
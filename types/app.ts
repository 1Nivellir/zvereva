export interface AllInfoDTO {
	companyName: string
	description: string
	contactInfo: AddressDTO
	portfolio: BaseInfoDTO[]
	practice: BaseInfoDTO[]
	employees: BaseInfoDTO[]
}


export interface AddressDTO {
	address: string
	mobilePhone: string
}

export interface BaseInfoDTO {
	name: string
	description: string
}


export interface AllInfoDTO {
	companyName: string
	description: string
	contactInfo: AddressDTO
	portfolio: ProjectDTO[]
	practice: BaseInfoDTO[]
	employees: BaseInfoDTO[]
}

export interface ProjectDTO extends BaseInfoDTO {
	imageId: string | null
}

export interface AddressDTO {
	address: string
	mobilePhone: string
}

export interface BaseInfoDTO {
	name: string
	description: string
}


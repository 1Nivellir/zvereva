export interface AllInfoDTO {
	companyName: string
	description: string
	contactInfo: AddressDTO
	portfolio: ProjectDTO[]
	practice: BaseInfoDTO[]
	employees: TeamDTO[]
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

export interface TeamDTO {
	imageId: string 
	name: string
	jobTitle: string
}

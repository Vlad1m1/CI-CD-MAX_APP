export interface User {
	id: number;
	externalId: number;
	username: string;
	firstName: string;
	lastName: string;
	photoUrl: string;
	stars: number;
	exp: number;
	role: string;
	languageId: number;
	createdAt: string;
	lastLoginAt: string;
}

export interface AuthResponse {
	accessToken: string;
	user: User;
}

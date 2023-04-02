/// <reference path="Teacher.ts"/>

namespace Subjects {
	export interface Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {
		getRequirements() {
			return 'Here is the list of requirements for Cpp';
		}

		getAvailableTeacher() {
			const exp: number | undefined = this.teacher.experienceTeachingC;
			if ( exp <= 0 || exp === undefined) {
				return 'No available teacher';
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}

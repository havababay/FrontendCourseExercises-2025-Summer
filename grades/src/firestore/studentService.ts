import { addDoc, collection, QueryDocumentSnapshot, type DocumentData, type FirestoreDataConverter, type WithFieldValue, type SnapshotOptions, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import { Student } from "../model/student"
import { firestore } from "./config";


const studentConverter: FirestoreDataConverter<Student> = {
    toFirestore(student: WithFieldValue<Student>): DocumentData {
        return { firstName: student.firstName, lastName: student.lastName, email: student.email };
    },


    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Student {
        const data = snapshot.data(options);
        return new Student(
            snapshot.id,
            data.firstName,
            data.lastName,
            data.email
        );
    }
};

export async function addStudent(student: Student) {
    const studentCollection = collection(firestore, "students").withConverter(studentConverter);
    await addDoc(studentCollection, student);
}


export async function listStudents(): Promise<Student[]> {
    const studentCollection = collection(firestore, "students").withConverter(studentConverter);
    const querySnapshot = await getDocs(studentCollection);
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getStudent(id: string): Promise<Student | null> {
    const studentDocRef = doc(firestore, "students", id).withConverter(studentConverter);
    const docSnap = await getDoc(studentDocRef);

    if (docSnap.exists()) {
        return docSnap.data();
    }
    return null;
}

export async function updateStudent(student: Student): Promise<void> {
    const studentDocRef = doc(firestore, "students", student.id).withConverter(studentConverter);
    await setDoc(studentDocRef, student);
}

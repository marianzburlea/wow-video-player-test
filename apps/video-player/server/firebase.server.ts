import * as admin from 'firebase-admin'
import type { ServiceAccount } from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    } as ServiceAccount),
  })
}

export const writeToFire = async (
  table = 'change-me',
  info: Record<string, any>,
  id = '',
  merge = true
) => {
  if (id) {
    await admin.firestore().collection(table).doc(id).set(info, { merge })
  } else {
    await admin.firestore().collection(table).add(info)
  }

  return {}
}

export const listFromFire = async (tableName = 'change-me', limit = 50) => {
  const snap = await admin.firestore().collection(tableName).limit(limit).get()

  return snap.docs.map((doc) => ({
    ...doc.data(),
    docid: doc.id,
    createTime: doc.createTime,
    updateTime: doc.updateTime,
  }))
}

export const readFromFire = async (table = 'change-me', id = '') => {
  const docSnap = await admin.firestore().collection(table).doc(id).get()

  return docSnap.data()
}

export default admin

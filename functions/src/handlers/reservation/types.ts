export interface Reservation {
  resUid: string,
  consultantId: string,
  patientName: string,
  patientNameCN?: string,
  patientMemberId?: string,
  isFirstVisit: boolean,
  patientPhone: string,
  date: string,
  startTime: string,
  duration: number,
  createdAt: number,
  updatedAt: number,
}

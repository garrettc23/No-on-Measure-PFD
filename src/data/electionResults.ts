import data from './election-results.json';
import { validateElectionReports } from '../utils/electionResults.mjs';
export interface ElectionReport {
  status: 'preliminary' | 'certified';
  yesVotes: number;
  noVotes: number;
  outcome?: 'passed' | 'failed';
  sourceUrl: string;
  sourceLabel: string;
  sourceUpdatedAt: string;
  reviewedAt: string;
}
export const electionReports: ElectionReport[] = data.reports;
validateElectionReports(electionReports);
export const latestElectionReport = electionReports.at(-1);

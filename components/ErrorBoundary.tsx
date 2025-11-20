import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-driftwood-dark-bg text-white p-4 text-center">
          <AlertTriangle size={48} className="text-driftwood-orange mb-4" />
          <h1 className="text-2xl font-bold font-sans mb-2">System Malfunction</h1>
          <p className="text-driftwood-dark-text mb-6 max-w-md font-mono text-sm">
            [CRITICAL_ERROR]: The visualization interface encountered an unexpected state.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-driftwood-orange text-white rounded font-mono text-sm hover:bg-orange-600 transition-colors"
          >
            REBOOT_SYSTEM()
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
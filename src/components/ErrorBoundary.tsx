import { Component, type ErrorInfo, type ReactNode } from 'react';

export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Page failed to render', error, info);
  }
  render() {
    if (this.state.failed)
      return (
        <div className="mx-auto max-w-3xl p-6 text-brown" role="alert">
          <p>页面暂时无法加载，请刷新重试。</p>
          <button className="reader-btn mt-4" onClick={() => window.location.reload()}>
            刷新页面
          </button>
        </div>
      );
    return this.props.children;
  }
}

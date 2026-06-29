import { Global, Module } from '@nestjs/common';
import { PiiEncryptionService } from './services/pii-encryption.service';
import { RateLimitMonitorService } from './services/rate-limit-monitor.service';
import { CacheInvalidationService } from './cache/cache-invalidation.service';
import { MetricsService } from './metrics/metrics.service';
import { ObservabilityDashboardService } from './metrics/observability-dashboard.service';
import { ObservabilityDashboardController } from './metrics/observability-dashboard.controller';
import { DataScopeService } from './services/data-scope.service';

@Global()
@Module({
  providers: [
    RateLimitMonitorService,
    PiiEncryptionService,
    CacheInvalidationService,
    MetricsService,
    ObservabilityDashboardService,
    DataScopeService,
  ],
  controllers: [ObservabilityDashboardController],
  exports: [
    RateLimitMonitorService,
    PiiEncryptionService,
    CacheInvalidationService,
    MetricsService,
    ObservabilityDashboardService,
    DataScopeService,
  ],
})
export class CommonModule {}

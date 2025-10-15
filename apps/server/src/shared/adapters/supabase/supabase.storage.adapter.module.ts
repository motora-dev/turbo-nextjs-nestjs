import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { SupabaseStorageAdapter } from './supabase.storage.adapter';

@Module({
  imports: [ConfigModule],
  providers: [SupabaseStorageAdapter],
  exports: [SupabaseStorageAdapter],
})
export class SupabaseAdapterModule {}

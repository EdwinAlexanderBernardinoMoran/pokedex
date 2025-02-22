import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    MongooseModule.forFeature([
      // Define the schema for the Pokemon entity
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      }
    ])
  ],
})
export class PokemonModule {}

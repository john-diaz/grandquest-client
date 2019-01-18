import { Character, CombatEvent } from '@/game/types';

// Store
export interface State {
    user: User;
    world: World;
    combatHub: CombatHub;
    combatGame: CombatGame;
    socket: SocketState;
}
// Action Context
export interface ActionContext {
    state: State,
    dispatch: any,
    commit: any,
}

// Models
export interface User {
    id:             number|null;
    username:       string;
    loading:        boolean;
    authenticated:  boolean;
    currentJWT:     string;
    created_at:     string;
    is_admin:       boolean;
}
export interface World {
    timeOfDay:         number;
    connections:       number;
}
export interface CombatHub {
    rooms: {
        [id: string]: CombatRoom,
    }
}
export interface CombatRoom {
    id:          string;
    title:       string;
    playerCount: number;
    maxPlayers:  number;
    turn: number;
    level: number;
    players: {
        [id: string]: Character,
    },
    enemies: {
        [id: string]: Character,
    },
    turnEvents: { // TODO: probably should make an interface for ``
        [turnIndex: number]: [CombatEvent]
    }
}
export interface CombatGame {
    gameState: CombatRoom;
    selectionMode: string;
}
export interface SocketState {
    connected:  boolean;
    loading:    boolean;
    room:       null | {
        name:       string;
        parameter:  any;
    };
}
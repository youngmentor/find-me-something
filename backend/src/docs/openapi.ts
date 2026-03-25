const socialLinksSchema = {
  type: 'object',
  minProperties: 1,
  properties: {
    website: {
      type: 'string',
      format: 'uri',
      example: 'https://findmesomething.app'
    },
    x: {
      type: 'string',
      format: 'uri',
      example: 'https://x.com/toyin_codes'
    },
    instagram: {
      type: 'string',
      format: 'uri',
      example: 'https://instagram.com/toyin_codes'
    },
    linkedin: {
      type: 'string',
      format: 'uri',
      example: 'https://linkedin.com/in/toyin-alabi'
    },
    youtube: {
      type: 'string',
      format: 'uri',
      example: 'https://youtube.com/@toyin_codes'
    },
    tiktok: {
      type: 'string',
      format: 'uri',
      example: 'https://tiktok.com/@toyin_codes'
    }
  },
  example: {
    website: 'https://findmesomething.app',
    x: 'https://x.com/toyin_codes',
    instagram: 'https://instagram.com/toyin_codes'
  }
} as const;

const nairaPayoutAccountSchema = {
  type: 'object',
  required: ['bankCode', 'bankName', 'accountName', 'accountNumber'],
  properties: {
    bankCode: {
      type: 'string',
      pattern: '^\\d{3}$',
      example: '044'
    },
    bankName: {
      type: 'string',
      example: 'Access Bank'
    },
    accountName: {
      type: 'string',
      example: 'Toyin Alabi'
    },
    accountNumber: {
      type: 'string',
      example: '0123456789'
    }
  }
} as const;

const userMetaSchema = {
  type: 'object',
  required: ['socialLinks'],
  properties: {
    socialLinks: socialLinksSchema,
    nairaPayoutAccount: nairaPayoutAccountSchema
  }
} as const;

const userSchema = {
  type: 'object',
  required: ['id', 'fullName', 'email', 'bio', 'isOnboarded', 'meta', 'createdAt', 'updatedAt'],
  properties: {
    id: {
      type: 'string',
      example: '67f13d5dbbf890f21f0f4c83'
    },
    fullName: {
      type: 'string',
      example: 'Toyin Alabi'
    },
    username: {
      type: 'string',
      example: 'toyin_codes'
    },
    email: {
      type: 'string',
      format: 'email',
      example: 'toyin@example.com'
    },
    bio: {
      type: 'string',
      example: 'Helping creators earn support online.'
    },
    isOnboarded: {
      type: 'boolean',
      example: true
    },
    meta: userMetaSchema,
    createdAt: {
      type: 'string',
      format: 'date-time',
      example: '2026-03-25T12:15:31.120Z'
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      example: '2026-03-25T12:15:31.120Z'
    }
  }
} as const;

const errorSchema = {
  type: 'object',
  required: ['message'],
  properties: {
    message: {
      type: 'string',
      example: 'Invalid email or password.'
    },
    details: {
      nullable: true
    }
  }
} as const;

const publicDonationStatusSchema = {
  type: 'object',
  required: ['username', 'isOnboarded', 'isReadyToAcceptDonations'],
  properties: {
    username: {
      type: 'string',
      example: 'toyin_codes'
    },
    isOnboarded: {
      type: 'boolean',
      example: true
    },
    isReadyToAcceptDonations: {
      type: 'boolean',
      example: true
    }
  }
} as const;

export const openApiSpec = {
  openapi: '3.0.3',
  info: {
    title: 'find-me-something API',
    version: '1.0.0',
    description:
      'Interactive API documentation for the find-me-something backend. Register with a minimal account, log in, then complete profile onboarding with creator details and naira payout information.'
  },
  servers: [
    {
      url: '/',
      description: 'Current server'
    }
  ],
  tags: [
    {
      name: 'System',
      description: 'Health and API metadata'
    },
    {
      name: 'Auth',
      description: 'Registration and login'
    },
    {
      name: 'Users',
      description: 'Authenticated user profile and onboarding endpoints'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    schemas: {
      SocialLinks: socialLinksSchema,
      NairaPayoutAccount: nairaPayoutAccountSchema,
      UserMeta: userMetaSchema,
      User: userSchema,
      PublicDonationStatusResponse: publicDonationStatusSchema,
      RegisterRequest: {
        type: 'object',
        required: ['fullName', 'email', 'password'],
        properties: {
          fullName: {
            type: 'string',
            minLength: 2,
            maxLength: 80,
            example: 'Toyin Alabi'
          },
          email: {
            type: 'string',
            format: 'email',
            example: 'toyin@example.com'
          },
          password: {
            type: 'string',
            minLength: 8,
            maxLength: 128,
            format: 'password',
            example: 'strongPassword123'
          }
        }
      },
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
            example: 'toyin@example.com'
          },
          password: {
            type: 'string',
            minLength: 8,
            maxLength: 128,
            format: 'password',
            example: 'strongPassword123'
          }
        }
      },
      OnboardRequest: {
        type: 'object',
        required: ['username', 'bio', 'socialLinks', 'nairaPayoutAccount'],
        properties: {
          username: {
            type: 'string',
            minLength: 3,
            maxLength: 30,
            pattern: '^[a-z0-9_]+$',
            example: 'toyin_codes'
          },
          bio: {
            type: 'string',
            maxLength: 280,
            example: 'Helping creators earn support online.'
          },
          socialLinks: socialLinksSchema,
          nairaPayoutAccount: nairaPayoutAccountSchema
        }
      },
      RegisterSuccessResponse: {
        type: 'object',
        required: ['message', 'user'],
        properties: {
          message: {
            type: 'string',
            example: 'User registered successfully.'
          },
          user: userSchema
        }
      },
      AuthSuccessResponse: {
        type: 'object',
        required: ['message', 'token', 'user'],
        properties: {
          message: {
            type: 'string',
            example: 'Login successful.'
          },
          token: {
            type: 'string',
            example: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...'
          },
          user: userSchema
        }
      },
      OnboardSuccessResponse: {
        type: 'object',
        required: ['message', 'user'],
        properties: {
          message: {
            type: 'string',
            example: 'User onboarded successfully.'
          },
          user: userSchema
        }
      },
      CurrentUserResponse: {
        type: 'object',
        required: ['user'],
        properties: {
          user: userSchema
        }
      },
      HealthResponse: {
        type: 'object',
        required: ['status', 'service', 'timestamp'],
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          service: {
            type: 'string',
            example: 'find-me-something-api'
          },
          timestamp: {
            type: 'string',
            format: 'date-time',
            example: '2026-03-25T12:15:31.120Z'
          }
        }
      },
      ApiWelcomeResponse: {
        type: 'object',
        required: ['message'],
        properties: {
          message: {
            type: 'string',
            example: 'Welcome to the find-me-something API.'
          }
        }
      },
      ErrorResponse: errorSchema
    }
  },
  paths: {
    '/health': {
      get: {
        tags: ['System'],
        summary: 'Health check',
        responses: {
          '200': {
            description: 'Application health status',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/HealthResponse'
                }
              }
            }
          }
        }
      }
    },
    '/api/v1': {
      get: {
        tags: ['System'],
        summary: 'API welcome route',
        responses: {
          '200': {
            description: 'API welcome message',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ApiWelcomeResponse'
                }
              }
            }
          }
        }
      }
    },
    '/api/v1/auth/register': {
      post: {
        tags: ['Auth'],
        summary: 'Register a user with basic account details',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RegisterRequest'
              }
            }
          }
        },
        responses: {
          '201': {
            description: 'User registered successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/RegisterSuccessResponse'
                }
              }
            }
          },
          '400': {
            description: 'Validation error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          },
          '409': {
            description: 'Email already exists',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          }
        }
      }
    },
    '/api/v1/auth/login': {
      post: {
        tags: ['Auth'],
        summary: 'Authenticate a user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LoginRequest'
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Login successful',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/AuthSuccessResponse'
                }
              }
            }
          },
          '400': {
            description: 'Validation error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          },
          '401': {
            description: 'Invalid credentials',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          }
        }
      }
    },
    '/api/v1/users/{username}/donation-status': {
      get: {
        tags: ['Users'],
        summary: 'Check whether a creator is ready to receive donations',
        parameters: [
          {
            in: 'path',
            name: 'username',
            required: true,
            schema: {
              type: 'string',
              pattern: '^[a-z0-9_]+$',
              minLength: 3,
              maxLength: 30
            },
            example: 'toyin_codes'
          }
        ],
        responses: {
          '200': {
            description: 'Creator donation readiness status',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/PublicDonationStatusResponse'
                }
              }
            }
          },
          '404': {
            description: 'User not found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          }
        }
      }
    },
    '/api/v1/users/onboard': {
      patch: {
        tags: ['Users'],
        summary: 'Complete or update creator onboarding',
        security: [
          {
            bearerAuth: []
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/OnboardRequest'
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'User onboarded successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/OnboardSuccessResponse'
                }
              }
            }
          },
          '400': {
            description: 'Validation error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          },
          '401': {
            description: 'Missing or invalid access token',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          },
          '409': {
            description: 'Username already exists',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          }
        }
      }
    },
    '/api/v1/users/me': {
      get: {
        tags: ['Users'],
        summary: 'Fetch the current user profile',
        security: [
          {
            bearerAuth: []
          }
        ],
        responses: {
          '200': {
            description: 'Authenticated user profile',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/CurrentUserResponse'
                }
              }
            }
          },
          '401': {
            description: 'Missing or invalid access token',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          },
          '404': {
            description: 'User not found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ErrorResponse'
                }
              }
            }
          }
        }
      }
    }
  }
} as const;
